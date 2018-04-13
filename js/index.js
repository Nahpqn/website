var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouter = ReactRouter,
    Route = _ReactRouter.Route,
    RouteHandler = _ReactRouter.RouteHandler,
    DefaultRoute = _ReactRouter.DefaultRoute,
    Link = _ReactRouter.Link;

var TransitionGroup = React.addons.CSSTransitionGroup;

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var name = this.context.router.getCurrentPath();
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(
              Link,
              { to: "home" },
              "Home"
            ),
            React.createElement(
              Link,
              { to: "about" },
              "About Me / Projects"
            ),
            React.createElement(
              Link,
              { to: "portfolio" },
              "Portfolio"
            )
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "a",
              { href: "http://www.aeneus.tk/", target: "_blank" },
              "Watch a movie?"
            )
          )
        ),
        React.createElement(
          TransitionGroup,
          { component: "div", transitionName: "page-transition" },
          React.createElement(RouteHandler, null)
        )
      );
    }
  }]);

  return Layout;
}(React.Component);

Layout.contextTypes = {
  router: React.PropTypes.func.isRequired
};

var Home = function (_React$Component2) {
  _inherits(Home, _React$Component2);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement("img", { src: "https://gdurl.com/2dAf" }),
        React.createElement(
          "h1",
          null,
          "I'm ",
          React.createElement(
            "span",
            null,
            "Ryan Witham"
          ),
          "."
        ),
        React.createElement(
          "p",
          null,
          "Graphics / Web Developer"
        )
      );
    }
  }]);

  return Home;
}(React.Component);

var Portfolio = function (_React$Component3) {
  _inherits(Portfolio, _React$Component3);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "resumeContainer" },
          React.createElement(
            "div",
            { id: "resumeColumn" },
            React.createElement(
              "div",
              { id: "resumeBoxContain" },
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Accomplishments"
                ),
                React.createElement(
                  "li",
                  null,
                  "SkillsUSA Nationals Gold"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                )
              ),
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Goals for the Future"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                ),
                React.createElement(
                  "li",
                  null,
                  "Lorem Ipsum"
                )
              )
            ),
            React.createElement(
              "div",
              { id: "resumeBoxContain" },
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Lucas ipsum dolor sit amet wookiee darth lando organa ventress mace fisto antilles mandalorians moff. Fett mace skywalker droid. Ponda gamorrean darth leia mace. Yoda jade darth organa jade padm\xE9 mothma organa greedo. Dagobah k-3po calamari skywalker antilles greedo jinn. Obi-wan kenobi solo moff sebulba mon. Solo luke bothan tusken raider antilles ahsoka darth dagobah. Jabba antilles utapau fett calamari ackbar antilles jinn. Droid darth moff amidala jango. Solo jinn ackbar grievous skywalker kit bespin hutt."
                )
              ),
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Lucas ipsum dolor sit amet wookiee darth lando organa ventress mace fisto antilles mandalorians moff. Fett mace skywalker droid. Ponda gamorrean darth leia mace. Yoda jade darth organa jade padm\xE9 mothma organa greedo. Dagobah k-3po calamari skywalker antilles greedo jinn. Obi-wan kenobi solo moff sebulba mon. Solo luke bothan tusken raider antilles ahsoka darth dagobah. Jabba antilles utapau fett calamari ackbar antilles jinn. Droid darth moff amidala jango. Solo jinn ackbar grievous skywalker kit bespin hutt."
                )
              )
            ),
            React.createElement(
              "div",
              { id: "resumeBoxContain" },
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Lucas ipsum dolor sit amet wookiee darth lando organa ventress mace fisto antilles mandalorians moff. Fett mace skywalker droid. Ponda gamorrean darth leia mace. Yoda jade darth organa jade padm\xE9 mothma organa greedo. Dagobah k-3po calamari skywalker antilles greedo jinn. Obi-wan kenobi solo moff sebulba mon. Solo luke bothan tusken raider antilles ahsoka darth dagobah. Jabba antilles utapau fett calamari ackbar antilles jinn. Droid darth moff amidala jango. Solo jinn ackbar grievous skywalker kit bespin hutt."
                )
              ),
              React.createElement(
                "div",
                { id: "resumeBox2" },
                React.createElement(
                  "p",
                  null,
                  "Lucas ipsum dolor sit amet wookiee darth lando organa ventress mace fisto antilles mandalorians moff. Fett mace skywalker droid. Ponda gamorrean darth leia mace. Yoda jade darth organa jade padm\xE9 mothma organa greedo. Dagobah k-3po calamari skywalker antilles greedo jinn. Obi-wan kenobi solo moff sebulba mon. Solo luke bothan tusken raider antilles ahsoka darth dagobah. Jabba antilles utapau fett calamari ackbar antilles jinn. Droid darth moff amidala jango. Solo jinn ackbar grievous skywalker kit bespin hutt."
                )
              )
            )
          ),
          React.createElement(
            "div",
            { id: "resumeBox" },
            React.createElement("img", { src: "http://via.placeholder.com/300x300" })
          )
        )
      );
    }
  }]);

  return Portfolio;
}(React.Component);

var About = function (_React$Component4) {
  _inherits(About, _React$Component4);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "aboutPage" },
          React.createElement(
            "div",
            { id: "aboutContainer" },
            React.createElement("img", { src: "https://gdurl.com/2dAf" }),
            React.createElement(
              "div",
              { id: "aboutBox" },
              React.createElement(
                "span",
                null,
                "Hi! I'm Ryan Witham."
              ),
              React.createElement(
                "p",
                null,
                "I am currently focusing on HTML/CSS, JavaScript, Python, React, C++, and other things as well. I reside in Vermont and am taking part in the Computer Animation and Web Design Program in Essex. This portfolio composes of some of my best work which is accessible through the many sections on my portfolio below."
              )
            )
          )
        ),
        React.createElement("div", { id: "pushUp" }),
        React.createElement(
          "div",
          { id: "cardPage" },
          React.createElement(
            "div",
            { id: "cardContainer" },
            React.createElement(
              Link,
              { to: "port1" },
              React.createElement(
                "div",
                { id: "card" },
                React.createElement("img", { src: "https://gdurl.com/KlS1" })
              )
            ),
            React.createElement(
              Link,
              { to: "port2" },
              React.createElement(
                "div",
                { id: "card" },
                React.createElement("img", { src: "https://gdurl.com/Kr0U" })
              )
            ),
            React.createElement(
              Link,
              { to: "port3" },
              React.createElement(
                "div",
                { id: "card" },
                React.createElement("img", { src: "https://gdurl.com/3K-c" })
              )
            )
          ),
          React.createElement(
            "div",
            { id: "cardContainer" },
            React.createElement(
              Link,
              { to: "port4" },
              React.createElement(
                "div",
                { id: "card" },
                React.createElement("img", { src: "https://gdurl.com/20Xh" })
              )
            ),
            React.createElement(
              "div",
              { id: "card" },
              React.createElement("img", { src: "https://gdurl.com/y4e9p" })
            ),
            React.createElement(
              "div",
              { id: "card" },
              React.createElement("img", { src: "https://gdurl.com/08ji" })
            )
          )
        )
      );
    }
  }]);

  return About;
}(React.Component);

var Port1 = function (_React$Component5) {
  _inherits(Port1, _React$Component5);

  function Port1() {
    _classCallCheck(this, Port1);

    return _possibleConstructorReturn(this, (Port1.__proto__ || Object.getPrototypeOf(Port1)).apply(this, arguments));
  }

  _createClass(Port1, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "arrowContainer" },
          React.createElement(
            Link,
            { to: "port2" },
            React.createElement("img", { src: "http://gdurl.com/Vfd7" })
          )
        ),
        React.createElement(
          "div",
          { id: "portfolioTab" },
          React.createElement(
            "div",
            { id: "portfolioContainer" },
            React.createElement("img", { src: "https://gdurl.com/qaCQ" }),
            React.createElement(
              "div",
              { id: "imgText" },
              React.createElement(
                "h1",
                null,
                "Mimmo's Pizza"
              ),
              React.createElement(
                "p",
                null,
                "This website was for my SkillsUSA state competition."
              )
            )
          )
        )
      );
    }
  }]);

  return Port1;
}(React.Component);

var Port2 = function (_React$Component6) {
  _inherits(Port2, _React$Component6);

  function Port2() {
    _classCallCheck(this, Port2);

    return _possibleConstructorReturn(this, (Port2.__proto__ || Object.getPrototypeOf(Port2)).apply(this, arguments));
  }

  _createClass(Port2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "arrowContainer" },
          React.createElement(
            Link,
            { to: "port1" },
            React.createElement("img", { src: "http://gdurl.com/fWMl" })
          ),
          React.createElement(
            Link,
            { to: "port3" },
            React.createElement("img", { src: "http://gdurl.com/Vfd7" })
          )
        ),
        React.createElement(
          "div",
          { id: "portfolioTab" },
          React.createElement(
            "div",
            { id: "portfolioContainer" },
            React.createElement("img", { src: "https://gdurl.com/jeuJ" }),
            React.createElement(
              "div",
              { id: "imgText" },
              React.createElement(
                "h1",
                null,
                "Snickers Bar | Midterm"
              ),
              React.createElement(
                "p",
                null,
                "This is a Snickers candy bar I had to 3d model for my CAWD midterm."
              ),
              React.createElement(
                "p",
                null,
                "Program used: Maya"
              )
            )
          )
        )
      );
    }
  }]);

  return Port2;
}(React.Component);

var Port3 = function (_React$Component7) {
  _inherits(Port3, _React$Component7);

  function Port3() {
    _classCallCheck(this, Port3);

    return _possibleConstructorReturn(this, (Port3.__proto__ || Object.getPrototypeOf(Port3)).apply(this, arguments));
  }

  _createClass(Port3, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "arrowContainer" },
          React.createElement(
            Link,
            { to: "port2" },
            React.createElement("img", { src: "http://gdurl.com/fWMl" })
          ),
          React.createElement(
            Link,
            { to: "port4" },
            React.createElement("img", { src: "http://gdurl.com/Vfd7" })
          )
        ),
        React.createElement(
          "div",
          { id: "portfolioTab" },
          React.createElement(
            "div",
            { id: "portfolioContainer" },
            React.createElement("img", { src: "https://gdurl.com/XoJnN" }),
            React.createElement(
              "div",
              { id: "imgText" },
              React.createElement(
                "h1",
                null,
                "Aeneus Cloud"
              ),
              React.createElement(
                "p",
                null,
                "This is a torrent media server that I've been working on in my free time."
              ),
              React.createElement(
                "p",
                null,
                "If you'd like to check it out: ",
                React.createElement(
                  "a",
                  { href: "http://www.aeneus.tk/" },
                  "Aeneus | tk"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Port3;
}(React.Component);

var Port4 = function (_React$Component8) {
  _inherits(Port4, _React$Component8);

  function Port4() {
    _classCallCheck(this, Port4);

    return _possibleConstructorReturn(this, (Port4.__proto__ || Object.getPrototypeOf(Port4)).apply(this, arguments));
  }

  _createClass(Port4, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "arrowContainer" },
          React.createElement(
            Link,
            { to: "port3" },
            React.createElement("img", { src: "http://gdurl.com/fWMl" })
          ),
          React.createElement(
            Link,
            { to: "port5" },
            React.createElement("img", { src: "http://gdurl.com/Vfd7" })
          )
        ),
        React.createElement(
          "div",
          { id: "portfolioTab" },
          React.createElement(
            "div",
            { id: "portfolioContainer" },
            React.createElement("img", { src: "https://gdurl.com/xIXj" }),
            React.createElement(
              "div",
              { id: "imgText" },
              React.createElement(
                "h1",
                null,
                "Can Model | Midterm"
              ),
              React.createElement(
                "p",
                null,
                "This is a model of a Coca Cola can I have to model for my CAWD midterm."
              ),
              React.createElement(
                "p",
                null,
                "Program used: Maya"
              )
            )
          )
        )
      );
    }
  }]);

  return Port4;
}(React.Component);

var Port5 = function (_React$Component9) {
  _inherits(Port5, _React$Component9);

  function Port5() {
    _classCallCheck(this, Port5);

    return _possibleConstructorReturn(this, (Port5.__proto__ || Object.getPrototypeOf(Port5)).apply(this, arguments));
  }

  _createClass(Port5, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { id: "arrowContainer" },
          React.createElement(
            Link,
            { to: "port4" },
            React.createElement("img", { src: "http://gdurl.com/fWMl" })
          )
        ),
        React.createElement(
          "div",
          { id: "portfolioTab" },
          React.createElement(
            "div",
            { id: "portfolioContainer" },
            React.createElement("img", { src: "https://gdurl.com/lRqw" }),
            React.createElement(
              "div",
              { id: "imgText" },
              React.createElement(
                "h1",
                null,
                "Can Model | Midterm"
              ),
              React.createElement(
                "p",
                null,
                "This is a model of a Coca Cola can I have to model for my CAWD midterm."
              ),
              React.createElement(
                "p",
                null,
                "Program used: Maya"
              )
            )
          )
        )
      );
    }
  }]);

  return Port5;
}(React.Component);

var Routes = React.createElement(
  Route,
  { name: "app", path: "/", handler: Layout },
  React.createElement(Route, { name: "home", handler: Home }),
  React.createElement(Route, { name: "about", handler: About }),
  React.createElement(Route, { name: "portfolio", handler: Portfolio }),
  React.createElement(Route, { name: "port1", handler: Port1 }),
  React.createElement(Route, { name: "port2", handler: Port2 }),
  React.createElement(Route, { name: "port3", handler: Port3 }),
  React.createElement(Route, { name: "port4", handler: Port4 }),
  React.createElement(Route, { name: "port5", handler: Port5 }),
  React.createElement(DefaultRoute, { handler: Home })
);

ReactRouter.run(Routes, function (Handler) {
  return React.render(React.createElement(Handler, null), document.getElementById('app'));
});