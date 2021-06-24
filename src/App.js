import "./App.css";

function App() {
  return (
    <div
      className="all"
      style={{ backgroundColor: "#F5F0F6", fontFamily: "Big Caslon" }}
    >
      <h2
        style={{
          border: "inset",
          backgroundColor: "#51513D",
          textAlign: "center",
          fontSize: "35px",
          marginTop: "30px",
          height: "50px",
          fontFamily: "Big Caslon",
          color: "white",
        }}
      >
        I'm Hala Abunahla !
      </h2>
      <div>
        <div style={{ marginTop: "10px" }}>
          <img src={require("./profilePic.jpg").default} />
          <div
            style={{
              width: "853px",
              height: "400px",
              marginLeft: "50px",
              border: " 5px solid #A6A867",
              backgroundColor: "#A6A867",
            }}
          >
            <div style={{ marginLeft: "40px" }}>
              <h1>ABOUT ME</h1>
              <p>
                hello and welcome to my "about me" page, my name is Hala Mohamed
                Abunahla, a 17 years old girl living in Gaza, interested in
                sports especially Cardio, reading, programming and organizing
                things differently and I am obsessed with journalling I study at
                Rosary Sisters School and I am currently a leader their making
                some activities to the kids during the summer as you can see at
                the picture.
              </p>
              <br />

              <h1>MY MUSIC</h1>
              <p>
                These days I am stuck with the 8-9D songs that take me to
                another life and make me feel like I am flying high and I
                attached some of my favourites down there :
              </p>
              <br />
              <div>
                <ul
                  style={{
                    fontSize: "18px",
                    color: "#AAADC4",
                  }}
                >
                  <li>
                    {" "}
                    <a
                      href="https://youtu.be/blL9AdbrQKo"
                      style={{ color: "#780116" }}
                    >
                      Sway with me
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://youtu.be/efcuh7wRomo"
                      style={{ color: "#780116" }}
                    >
                      Lovely{" "}
                    </a>
                  </li>

                  <li>
                    {" "}
                    <a
                      href="https://youtu.be/_sdh5h_zkkk"
                      style={{ color: "#780116" }}
                    >
                      Faded
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <h1>FUN FACTS</h1>

              <p style={{ fontSize: "18px", width: "700px", color: "white" }}>
                when I get super angrey I say ununderstadable words{" "}
              </p>
              <p style={{ fontSize: "18px", width: "700px", color: "white" }}>
                at the GYM I always cheat and don't do all workouts{" "}
              </p>
              <p style={{ fontSize: "18px", width: "700px", color: "white" }}>
                sometimes I read a story for myself before I sleep
              </p>
              <br />
              <h1>MY BOOKS</h1>
              <p>
                as I mentioned before, I am so interested in reading and my
                favourite book till now is called"حبيبي داعشي" it's a novel. I
                am interested too in reading poetry and books related to
                philosophy
              </p>
            </div>
          </div>
        </div>
        <img src={require("./img2.jpg").default} />

        <div
          style={{
            width: "853px",
            height: "450px",
            marginLeft: "50px",
            border: " 5px solid #A6A867",
            backgroundColor: "#A6A867",
          }}
        >
          {" "}
        </div>
      </div>
    </div>
  );
}

export default App;
