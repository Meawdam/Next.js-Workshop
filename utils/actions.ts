"use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export const createCamps = async (prevState : any, formData : FormData) =>{
    const raw = Object.fromEntries(formData);
    console.log(raw);
    //prisma.camp.create()
    // revalidatePath('/camp');
    // redirect("/");
    return "Created succesfully!!!";
}

export const fetchCamp = async ()=> {
    //prisma.camp.findMany({});
    const camps = [
        {id: 1, title: "Lorem_1"},
        {id: 2, title: "Lorem_2"},
        {id: 3, title: "Lorem_3"}
    ];

    return camps;
}