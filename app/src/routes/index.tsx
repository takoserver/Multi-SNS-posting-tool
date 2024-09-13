import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import type { APIEvent } from "@solidjs/start/server";
import { getCookie } from "vinxi/http";
import store from "./store";

export function GET(event: APIEvent) {
  const sessionid = getCookie("sessionid");
}