!function (n, o) {
	"object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports.anycontrol = o() : n.anycontrol = o()
}
(this, function () {
	return function (n) {
		function o(i) {
			if (t[i])
				return t[i].exports;
			var e = t[i] = {
				i: i,
				l: !1,
				exports: {}
			};
			return n[i].call(e.exports, e, e.exports, o),
			e.l = !0,
			e.exports
		}
		var t = {};
		return o.m = n,
		o.c = t,
		o.d = function (n, t, i) {
			o.o(n, t) || Object.defineProperty(n, t, {
				configurable: !1,
				enumerable: !0,
				get: i
			})
		},
		o.n = function (n) {
			var t = n && n.__esModule ? function () {
				return n.default
			}
			 : function () {
				return n
			};
			return o.d(t, "a", t),
			t
		},
		o.o = function (n, o) {
			return Object.prototype.hasOwnProperty.call(n, o)
		},
		o.p = "",
		o(o.s = 0)
	}
	([function (n, o, t) {
				"use strict";
				Object.defineProperty(o, "__esModule", {
					value: !0
				});
				var i = function () {
					var n = this,
					o = window.webkitSpeechRecognition || window.SpeechRecognition;
					return this.recognition = new o,
					this.finalTranscript = "",
					this.commands = {},
					this.DEBUG = !1,
					this.recognizing = !1,
					this.recognition.onresult = function (o) {
						if (void 0 === o.results)
							return n.DEBUG && console.info("undefined result"), void n.recognition.stop();
						for (var t = o.resultIndex; t < o.results.length; t += 1)
							o.results[t].isFinal && (n.finalTranscript += o.results[t][0].transcript);
						if ("" !== n.finalTranscript) {
							n.DEBUG && console.info("received command:", n.finalTranscript),
							n.finalTranscript = n.finalTranscript.toLowerCase().trim();
							var i = n.commands;
							Object.keys(i).forEach(function (o) {
								if (n.finalTranscript.indexOf(o) > -1)
									if (void 0 === n.finalTranscript[o.length])
										n.DEBUG && console.info("calling command", o), n.commands[o]();
									else if (" " === n.finalTranscript[o.length]) {
										var t = n.finalTranscript.substring(o.length, n.finalTranscript.length).trim();
										n.commands[o](t),
										n.DEBUG && console.info("calling command", o, "with param:", t)
									}
							}),
							n.finalTranscript = ""
						} else
							n.DEBUG && console.info("received empty command")
					},
					this.recognition.onerror = function (o) {
						n.DEBUG && console.info("error occured", o)
					},
					this.recognition.onstart = function (o) {
						n.DEBUG && console.info("start", o),
						n.recognizing = !0
					},
					this.recognition.onend = function (o) {
						n.DEBUG && console.info("end", o),
						n.recognizing = !1,
						n.recognition.continuous && (n.DEBUG && console.info("restarting", n.recognition.continuous), n.recognition.start())
					},
					this
				};
				i.prototype.isSupported = function () {
					return !!this.recognition
				},
				i.prototype.addCommand = function (n, o) {
					this.DEBUG && console.info("added command:", n),
					this.commands[n.toLowerCase()] = o
				},
				i.prototype.removeCommand = function (n) {
					return this.DEBUG && console.info("removed command:", n),
					!!this.commands[n] && (delete this.commands[n], !0)
				},
				i.prototype.start = function () {
					this.DEBUG && console.info("started listening"),
					this.recognition.continuous = !0,
					this.recognition.start()
				},
				i.prototype.stop = function () {
					this.DEBUG && console.info("stopped listening"),
					this.recognition.continuous = !1,
					this.recognition.stop()
				},
				i.prototype.getCommand = function () {
					var n = this,
					o = 1;
					this.isRecognizing() && (this.stop(), o = 1e3),
					setTimeout(function () {
						n.DEBUG && console.info("listening for single command"),
						n.recognition.continuous = !1,
						n.recognition.start()
					}, o)
				},
				i.prototype.debug = function (n) {
					this.DEBUG = !!n
				},
				i.prototype.isRecognizing = function () {
					return this.recognizing
				};
				var e = i;
				o.default = e,
				n.exports = e
			}
		])
});
//# sourceMappingURL=index.umd.min.js.map