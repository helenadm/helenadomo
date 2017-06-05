import theme from './theme'
import index from './Navbar'

export default (props) => (
  <div>
    <div className="page-content">
      <div className="wrapper">
        <index />
        <div className="paper">
           <img className="paper1" src="../static/hermano.jpg" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .page-content {
        padding: 3em 0;
      }

      .wrapper {
        max-width: 50em;
        margin-right: auto;
        margin-left: auto;
      }

      img:hover {
         opacity: 0.7;
      }

      .paper1 {
        max-width: 50em;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 25em;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .paper {
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 4.5em 5.5em;
        min-height: 400px;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      @media screen and (max-width: ${theme['phone']}) {
        .wrapper {
          max-width: 100%;
        }

        .paper {
          padding: 1em;
        }

      }
    `}</style>
  </div>
)
