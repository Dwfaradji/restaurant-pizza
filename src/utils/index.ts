// import { compareDesc, parseISO } from "date-fns";

export const cx = (...classes: (string | boolean | undefined)[]) =>
    classes.filter(Boolean).join(" ");

// export const sortCards = (blogs) => {
//   return blogs
//     .slice()
//     .sort((a, b) =>
//       compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
//     );
// };
