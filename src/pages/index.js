import { urlShortner } from "@/ApiContants";
import { postApiCall } from "@/HelperFunctions";
import urlCSS from "@/styles/urlCSS";
import { useEffect, useState } from "react";

const urls = () => {
  const [clientLoaded, setClientLoaded] = useState(false);
  const [url, setUrl] = useState("");
  const [finalUrl, setFinalUrl] = useState("");
  const [buttonText, setButtonText] = useState("Copy");

  useEffect(() => {
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    if (finalUrl) {
      navigator.clipboard
        .writeText(finalUrl)
        .then(() => {
          setButtonText("COPIED");
          setTimeout(() => {
            setButtonText("COPY");
          }, 2500);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  }, [finalUrl]);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlPattern = /^(?=.*\..+)(?=.*[a-zA-Z].*[a-zA-Z]).+$/;

    if (!urlPattern.test(url)) {
      alert("Please enter a valid URL.");
      return;
    }

    const jsonData = {
      url: url,
    };
    try {
      const result = await postApiCall(urlShortner?.SHORTEN_URL, jsonData);
      console.log("Success:", result?.short_url);
      setFinalUrl(urlShortner?.REDIRECT_URL + result?.short_url);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit2 = (event) => {
    event.preventDefault(); // Prevent the default form submission if in a form
    navigator.clipboard
      .writeText(finalUrl)
      .then(() => {
        setButtonText("COPIED");
        setTimeout(() => {
          setButtonText("COPY");
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      {clientLoaded ? <style>{urlCSS()}</style> : null}

      <h1 className="main-head">URL SHORTNER</h1>

      <div className="container">
        <div className="block">
          <span className="lightning1"></span>
          <span className="lightning2"></span>
          <span className="lightning3"></span>
          <span className="lightning4"></span>
          <span className="blockshade"></span>
          <h2 className="label">Website Url:</h2>
          <input
            className="input"
            type="url"
            name="url"
            placeholder="Enter url here"
            value={url}
            onChange={handleInputChange}
            required
          />

          <input type="submit" onClick={handleSubmit} className="submitbut" />
          <br />

          {finalUrl ? (
            <>
              <span className="output">{finalUrl}</span>
              <input
                type="submit"
                onClick={handleSubmit2}
                className="submitbut submitBtn2"
                value={buttonText}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default urls;
