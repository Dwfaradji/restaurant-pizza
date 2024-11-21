// import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");

// export const sortCards = (blogs) => {
//   return blogs
//     .slice()
//     .sort((a, b) =>
//       compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
//     );
// };
