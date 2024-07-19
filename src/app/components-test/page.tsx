import Link from "next/link";
import "./card.css";

function ComponentTestPage() {
  return (
      <div className="card-hover w-[300px] mt-36 mx-auto h-[400px]">
        <div className="overlay">
          <div className="content">
            <h2>Kratos</h2>
            <p>
              From This Night Forward, The Mark Of Your Terrible Deed Will Be
              Visible To All. The Ashes Of Your Wife And Child Will Remain
              Fastened To Your Skin, Never To Be Removed.
            </p>
            <Link className="learn-more-btn" href="#">
              Learn More
            </Link>
          </div>

        </div>
      </div>
  );
}

export default ComponentTestPage;
