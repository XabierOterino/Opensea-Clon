import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId : 'czkvgpbf',
    dataset : 'production' , 
    apiVersion : '2021-10-21',
    token : 'skTq3gu1sPr9ro7fNsAwj1SnTssOms4u8kqEmuMX6qXw4spvoX4rhf1YeVERbpEiddw2tp6ok9fT2R6F6smgnf2qk160gkSDvLf6mWhZKkl25vqKnBlCbbAmwnnuFgY8Yw7L4JzR7MLMtkAT03dluqDDROlTpapkJNOpKIe8Ag6cC7VfFQJP', 
    useCdn : false
})