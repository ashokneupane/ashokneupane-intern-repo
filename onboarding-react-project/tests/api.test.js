import axios from "axios";
import { getPosts } from "./api";

jest.mock("axios");

test("getPosts returns data from API", async () => {
  const postData = {
    userId: 3084,
    id: 5,
    title: "ashok title",
    body: "ashok body",
  };
  axios.get.mockResolvedValueOnce({ data: postData });

  const result = await getPosts();

  expect(axios.get).toHaveBeenCalledWith("/posts");
  expect(result.data).toEqual(postData);
});
