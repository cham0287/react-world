import { ArticleQueryParams, ArticleResponseType } from "@/types/articles";
import { executeAPI } from "./app";

export const getArticles = async (params: Partial<ArticleQueryParams>): Promise<ArticleResponseType> => {
  const formedParams = Object.entries(params)
    .map(([key, value]) => value && `${key}=${value}`)
    .join("&");

  const result = await executeAPI({
    method: "GET",
    // url: "/articles?" + new URLSearchParams(params).toString(),
    url: "/articles?" + formedParams,
  });
  return result;
};
