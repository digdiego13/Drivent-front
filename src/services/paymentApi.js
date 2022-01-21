import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class PaymentApi extends AuthenticatedApi {
  save(body) {
    return api.post("/ticket", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getTicketInformation() {
    return api.get("/ticket", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
