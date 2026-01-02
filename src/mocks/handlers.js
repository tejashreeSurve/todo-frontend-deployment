import { rest } from "msw";
const API_URL = import.meta.env.VITE_API_URL;


export const handlers = [
    rest.get(`${API_URL}/todos`, (req,res,ctx) => {
        return res(ctx.json([{_id: 1,title: "Study"},{_id: 2,title: "Walk"}]))
    }),
    rest.post(`${API_URL}/todos`, (req,res,ctx) => {
        return res(ctx.status(201), ctx.json({_id:3, title:"Dinner" }))
    }),
    rest.delete(`${API_URL}/todos/:id`, (req,res,ctx) => {
        return res(ctx.status(200));
    })
]