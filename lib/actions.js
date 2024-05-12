'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function shareMeal(formData) {
    // creates a server action, to execute only in the server,
    // this is a function that only executes in the server, so
    // we need to explicitly say 'user server'. but we must add the async to the function.

    // this feature exists because we take the server action and assign to the action prop of the form.

    // handle submitted data
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    // store in the database, but the image to the file system and path to the database
    await saveMeal(meal);

    redirect('/');

}
