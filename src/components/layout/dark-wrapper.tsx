// interactive cards props type declaration
interface Props {
  title?: string;
  subtitle?: string;
  displayedComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export function ContentDarkWrapper({
  title = "",
  subtitle = "",
  displayedComponent,
  children,
}: Props) {
  return (
    <div className="gap-6 bg-slate-900 py-8">
      {/* title text */}
      <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-4xl lg:text-5xl ">
        {title}
      </h2>
      <h3 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-400 md:text-3xl lg:text-4xl ">
        {subtitle}
      </h3>
      {displayedComponent}
      {children}
    </div>
  );
}
