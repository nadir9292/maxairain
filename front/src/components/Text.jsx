import classNames from "classnames"

const className = "font-bold"

const variants = {
  login_register:
    "text-maxAirain font-roboto underline decoration-yellow-400 underline-offset-2 font-bold text-center mb-10",
  nav_bar_text: "text-gray-900 font-roboto text-center",
  popup: "flex justify-center text-gray-900 font-semibold font-roboto",
  info: "text-neutral-800 font-roboto font-medium pt-2 mt-2 text-center",
  link: "underline underline-offset-2 text-yellow-500 font-semibold font-roboto",
  victory_text: "",
  loose_text: "",
  card_name: "text-amber-500 font-roboto font-bold text-left",
  card_title: "text-maxAirain font-roboto  font-bold text-center mt-3 mx-2",
  items: "text-red-200 text-left font-roboto text-zinc-200 mx-2 my-3",
  card_price: "text-zinc-200 font-roboto text-left",
  card_rating: "text-zinc-200 text-center font-roboto",
  detail_name: "text-amber-500 font-bold text-left font-roboto",
  detail_category: "text-zinc-200 text-left my-2 font-roboto",
  detail_description: "text-zinc-200 text-left mt-5 font-roboto",
  detail_price: "text-zinc-200 text-left font-roboto",
  detail_rating: "text-zinc-200 text-center font-roboto",
}

const sizes = {
  sm: "text-xs",
  md: "text-md",
  lg: "text-lg",
  xl: "text-3xl",
  xxl: "text-5xl",
}

const Text = (props) => {
  const { variant, size, ...otherProps } = props

  return (
    <h1
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Text
