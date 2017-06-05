
export default (props) => (
  <div>
    <header>
      <div className="wrapper">
        <nav>
          <a className="brand" href="./index">
          HELENA DOMO
          </a>
        </nav>
        <div className="navbarL">
        </div>
        <div className="navbarR">
          <div>
            <a href="../first">
             - A little of all
            <i className="fa fa-gift" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <a href="../boda">
            - Bodorrio
            <i className="fa fa-gift" aria-hidden="true"></i>
            </a>
          </div>
        </div>
     </div>
    </header>
    <style jsx>{`

      header {
        min-height: 3.3em;
        margin-top: 1em;
        position: relative;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      i{
          size:1em
      }

      .wrapper {
        max-width: 60em;
        margin-right: auto;
        margin-left: auto;
      }

      .brand {
        margin-left:1.2em;
        font-size: 1.9em;
        line-height: 3em;
        letter-spacing: -0.07em;
        margin-bottom: 0;
        float: left;
        text-decoration: none;
      }

      .navbarR {
        float: right;
        margin-top: 1.2em;
        margin-right: 2em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .navbarL {
        float: left;
        margin-top: 1.2em;
        margin-left: 1.2em;
      }
      a, a:visited {
        color: #424242;
        text-decoration: none;
      }

      a:hover {
        color: #ccc;
      }

      i {
        font-size:0.6em;
        margin-right: 1em;
      }

    `}</style>
  </div>
)
