import { http } from "./custom_express";
import "./websocket/client";

http.listen(3333, ()=> console.log("Server is running on port 3333"));