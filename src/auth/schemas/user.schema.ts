import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
})
export class User {
    @Prop()
    name: String;

    @Prop({unique: [true,'Dublicate email entered']})
    email: string;

    @Prop()
    password: string;
}

export const UserShema = SchemaFactory.createForClass(User)

