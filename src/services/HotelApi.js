import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class HotelApi extends AuthenticatedApi {
  save(body) {
    return api.post("/hotel", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getHotelInformation() {
    return api.get("/hotel", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
