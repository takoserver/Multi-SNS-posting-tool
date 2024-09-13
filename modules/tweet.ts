// 必要なモジュールをインポート
import { TwitterApi } from "twitter-api-v2";
export type Tokens = {
  "bearer_token": string;
  "api_key": string;
  "api_key_secret": string;
  "access_token": string;
  "access_token_secret": string;
};

// ツイートを投稿する関数
async function postTweet(text: string,tokens: Tokens): Promise<boolean> {
const client = new TwitterApi({
  appKey: tokens.api_key, // ここにTwitterのAPIキー
  appSecret: tokens.api_key_secret, // ここにTwitterのAPIシークレットキー
  accessToken: tokens.access_token, // ここにアクセストークン
  accessSecret: tokens.access_token_secret, // ここにアクセストークンシークレット
});
  try {
    const tweet = await client.v2.tweet(text);
    console.log("ツイートが投稿されました:", tweet);
    return true;
  } catch (error) {
    console.error("ツイートの投稿に失敗しました:", error);
    return false;
  }
}

export default postTweet;