import store from "@/redux/store/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
