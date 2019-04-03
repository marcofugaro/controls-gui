var preact = require('preact');
var createClass = require('../util/preact-classless-component');
var h = preact.h;

module.exports = {
  name: 'raw',
  component: createClass({
    getRef: function (el) {
      this.el = el;
    },

    getContent: function (props) {
      this.content = props.field.value;
      if (typeof this.content === 'function') {
        this.content = this.content(h, {
          field: props.field,
          state: props.state,
        });
      }
      return this.content;
    },

    render: function () {
      var className = this.props.className;
      return h('div', {
          className: `${className}__field--raw ${className}__field`
        },
        h('div', {
          ref: this.getRef,
          className: `${className}__rawContent`
        }, this.getContent(this.props))
      );
    }
  }),
  css: function (className, theme) {
    return `
      .${className}__field--raw {
        height: auto;
        padding: 0 7px 0 10px;
        overflow: hidden;
      }

      .${className}__rawContent {
        max-width: 100%;
        margin: 0;
        padding: 0;
      }

      .${className}__rawContent a {
        color: inherit;
      }

      .${className}__rawContent::before {
        background-color: #aaa;
      }

      .${className}__rawContent::before {
        content: '';
        width: 3px;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
      }

      .${className}__rawContent > p:first-child {
        margin-top: 5px;
      }

      .${className}__rawContent > p:last-child{
        margin-bottom: 5px;
      }

      .${className}__rawContent p {
        line-height: 1.8;
      }

      .${className}__rawContent pre {
        line-height: 1.3;
        font-size: 0.8em;
        margin: 0;
      }
    `;
  }
};
