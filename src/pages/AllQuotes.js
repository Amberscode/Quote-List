import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Amber", text: "I see a pill, I eat a pill" },
  {
    id: "q2",
    author: "Ashtyn",
    text: "There's too much fucking shit on me!!!",
  },
  { id: "q3", author: "Kirill", text: "She still craps, she still lies." },
  { id: "q4", author: "Marc", text: "Once an amputee, always an amputee." },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
