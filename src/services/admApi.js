import api from "./api";

export default class AdmApi {
  getEventType() {
    return api.get("/adm/event-type");
  }
}
