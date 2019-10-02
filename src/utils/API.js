//can't use ajax because there is no jquery
import axios from "axios";

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

//group all api calls
export default {
    searchYouTube: function (term) {
        return axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                q: term,
                type: "video",
                key: apiKey
            }
        })
    }
}