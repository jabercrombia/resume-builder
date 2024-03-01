function handleClickScroll(section: any){
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

const sectionArr = ["contact","portfolio","education","experience","skills"];

export default function SideNav() {
    return(
    <div className="fixed">
        <ul className="cursor-pointer mt-5">

        {sectionArr?.map((elem: any) => {
          return (
            <li className="capitalize hover:text-slate-600"
              key={elem}
              onClick={() => handleClickScroll(elem)}
            >
              {elem}
            </li>
          )
        })}
        </ul>
    </div>
    )
}