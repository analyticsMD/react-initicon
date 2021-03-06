'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof require != 'undefined') {
  var React = require('react');

  var _require = require('./shared'),
      getBackgroundColor = _require.getBackgroundColor,
      getFontSize = _require.getFontSize,
      getInitials = _require.getInitials,
      defaultProps = _require.defaultProps;

  var PropTypes = require('prop-types');
}

var Initicon = function (_React$Component) {
  _inherits(Initicon, _React$Component);

  function Initicon() {
    _classCallCheck(this, Initicon);

    return _possibleConstructorReturn(this, (Initicon.__proto__ || Object.getPrototypeOf(Initicon)).apply(this, arguments));
  }

  _createClass(Initicon, [{
    key: 'render',
    value: function render() {
      var props = this.props;

      return React.createElement(
        'div',
        { style: { backgroundColor: getBackgroundColor(props),
            height: this.props.size + "px",
            width: this.props.size + "px",
            fontSize: getFontSize(props) + "px",
            lineHeight: this.props.size + "px",
            borderRadius: '50%',
            display: 'inline-block',
            textAlign: 'center',
            color: '#ffffff' } },
        getInitials(props)
      );
    }
  }]);

  return Initicon;
}(React.Component);

Initicon.propTypes = {
  text: PropTypes.any.isRequired,
  size: PropTypes.any.isRequired,
  seed: PropTypes.number,
  color: PropTypes.any,
  single: PropTypes.bool,
  saturation: PropTypes.string,
  brightness: PropTypes.string
};

Initicon.defaultProps = defaultProps;

if (typeof module != 'undefined') {
  module.exports = Initicon;
}