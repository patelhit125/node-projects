// import moment from 'moment'
// import { castToStorage } from '../common/helper'

export default class UserResource {
  constructor(data) {
    this.userId = data.id
    this.firstName = data.firstName
    this.lastName = data.lastName
    this.email = data.email
    // this.providerId = data.providerId || 0
    // this.providerType = data.providerType
    // this.phoneNumber = data.phoneNumber
    // this.portfolioType = data.portfolioType
    // this.aadharCardNumber = data.aadharCardNumber
    // this.aadharCardFrontPhoto = castToStorage(data.aadharCardFrontPhoto)
    // this.aadharCardBackPhoto = castToStorage(data.aadharCardBackPhoto)
    // this.panCardFrontPhoto = castToStorage(data.panCardFrontPhoto)
    // this.address = data.address
    // this.birthdate = data.birthdate
    //   ? moment.utc(data.birthdate).format('YYYY-MM-DD')
    //   : data.birthdate
    // this.city = data.city
    // this.zipcode = data.zipcode
  }
}
