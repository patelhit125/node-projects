export default class UserModel {
  constructor(data) {
    this.userId = data.id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
  }
}
