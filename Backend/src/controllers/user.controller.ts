import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type createUserBody = {
	username: string;
	email: string;
    password: string;
};

const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.username || !body.email || !body.password)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.username, body.email)) {
			return c.json({
				success: false,
				data: null,
				msg: "Username or Email is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.username,
            body.email,
            body.password
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};

const getAllInfoUser = async (c: Context) => {
     try {
 		const user = await userModel.getAllInfoUser();
         return c.json(user);
 	} catch (e) {
 		return c.json(
 			{
 				success: false,
 				data: null,
 				msg: `${e}`,
 			},
 			500
 		);
 	}
 }

 const getInfoUser = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const user = await userModel.getInfoUser(id);
        return c.json(
            {
                success: true,
                data: user
            }
        );
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
}

const loginUser = async (c: Context) => {
	try {
		const { email,password } = await c.req.json();
		const user = await userModel.loginUser(email, password);;
		return c.json({
			success: true,
			data: user,
			msg: "Already login",
		});
	} catch (e) {
		return c.json({ success: false, data: null, msg: `${e}` }, 500);
	}
};

const editUsername = async (c: Context) => {
	try {
		const id = Number(c.req.param("id"));
		const { username } = await c.req.json();
		const user = await userModel.editUsername(id, username);
        return c.json(
            {
                success: true,
                data: user,
				msg: `Your username have changed to ${username}`
            }
        );
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
}

export { createUser, getInfoUser, loginUser, getAllInfoUser, editUsername }