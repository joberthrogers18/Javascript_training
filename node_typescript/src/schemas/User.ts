import { Schema, model, Document } from 'mongoose'

// For the lint know the atributes from the Userschema
interface UserInterface extends Document{
    email: string,
    firstName: string,
    lastName: string,
    fullName(): string
}

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
}, {
  timestamps: true // create the fields created at, updated at of all field
})

UserSchema.methods.fullName = function (): string {
  return this.firstName + this.lastName
}

// assume with the interface the pattern structure for users
export default model<UserInterface>('U ser', UserSchema)
