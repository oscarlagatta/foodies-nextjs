'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

function isInvalidText(text) {
    return (!text.title || text.title.trim() === '');
}

export async function shareMeal(prevState ,formData) {
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

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid Input'
        };
    }

    // store in the database, but the image to the file system and path to the database
    await saveMeal(meal);
    redirect('/');
}
