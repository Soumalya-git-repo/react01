# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



<!--  React Built-in Hooks

useState	কম্পোনেন্টের state ম্যানেজ করতে	কাউন্টার বাড়ানো/কমানো → const [count, setCount] = useState(0)
useEffect	Side Effect চালাতে (API call, timer, subscription)	কম্পোনেন্ট লোড হলে ডাটা ফেচ করা
useContext	Props drilling ছাড়া context ডাটা ব্যবহার	থিম বা ইউজার ইনফো শেয়ার করা
useReducer	জটিল state ম্যানেজ করতে	ফর্ম ডাটা বা টু-ডু লিস্ট state হ্যান্ডল
useRef	DOM element রেফারেন্স বা render ছাড়া value ধরে রাখা	ইনপুটে focus দেওয়া
useMemo	Expensive calculation memoize করা	বড় array filter করা একবার হিসেব করে রাখা
useCallback	Function memoize করা, re-render কমানো	চাইল্ড কম্পোনেন্টে callback পাঠানো
useLayoutEffect	DOM আপডেট হওয়ার সাথে সাথে effect চালানো	লেআউট মাপা বা animation ঠিক রাখা
useImperativeHandle	forwardRef এর সাথে কাস্টম ref তৈরি	parent কে custom method এক্সপোজ করা
useId	Unique ID বানানো	Form label ↔ input id জেনারেট করা
useTransition	Non-urgent update smooth করা	Search suggestions delay করে দেখানো
useDeferredValue	Value ডিলে করে update করা	লাইভ সার্চে টাইপ করার সময় দেরি করে রেজাল্ট দেখানো
useSyncExternalStore	External store (Redux/Zustand) sync করা	Redux state subscribe করা
useInsertionEffect	DOM আপডেটের আগে style inject করা	CSS-in-JS লাইব্রেরিতে স্টাইল অ্যাড করা -->


<!-- Common Custom Hooks (Projects এ Mostly ব্যবহৃত)

useFetch / useApi	API থেকে ডাটা ফেচ করা	ইউজার লিস্ট লোড করা
useLocalStorage	LocalStorage এ ডাটা রাখা	টোকেন বা থিম সেভ করা
useDebounce	টাইপ করার পরে দেরি করে একশন চালানো	Search input → 500ms পরে API কল
useThrottle	Event লিমিট করা	Scroll/resize প্রতি 200ms এ চালানো
usePrevious	আগের state/props ট্র্যাক করা	আগের ভ্যালু আর বর্তমান ভ্যালু compare করা
useWindowSize	Window size ট্র্যাক করা	Responsive UI তে মোবাইল/ডেস্কটপ আলাদা UI
useOnClickOutside	বাইরের ক্লিক ধরতে	Modal বাইরে ক্লিক করলে বন্ধ হওয়া
useMediaQuery	Screen breakpoint অনুযায়ী কাজ	768px এর নিচে mobile layout দেখানো
useForm	ফর্ম ডাটা ম্যানেজ + validation	Login/Register form
useDarkMode	লাইট/ডার্ক থিম টগল	বাটনে ক্লিক করলে থিম পাল্টানো -->
