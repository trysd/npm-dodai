/*!
  Dodai.js v2.1.7 ggggg
  
  Released under the MIT License.
*/
'use strict';

var bodyScrollLock = require('body-scroll-lock');
var focusTrap = require('focus-trap');
var merge = require('lodash.merge');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);

var CommandTest = /** @class */ (function () {
    function CommandTest() {
    }
    CommandTest.prototype.test = function () {
        console.log("CommandTest..", process.argv);
    };
    return CommandTest;
}());

/**
 * Modal Class
 */
var Modal = /** @class */ (function () {
    /**
     * Init Instance
     */
    function Modal(element, options) {
        var _a;
        this._element = element;
        this.options = merge__default['default']({
            focusTrap: {
                onActivate: undefined,
                onDeactivate: undefined,
                initialFocus: undefined,
                fallbackFocus: undefined,
                returnFocusOnDeactivate: undefined,
                setReturnFocus: undefined,
                allowOutsideClick: undefined,
            },
            bodyScrollLock: {
                reserveScrollBarGap: true,
                allowTouchMove: function (element) {
                    var ignoreDatasetKey = "bodyScrollLockIgnore";
                    while (element && element !== document.body) {
                        if ("dataset" in element && ignoreDatasetKey in element.dataset) {
                            return true;
                        }
                        if (element.parentElement)
                            element = element.parentElement;
                    }
                    return false;
                },
            },
        }, options, {
            focusTrap: {
                escapeDeactivates: false,
                clickOutsideDeactivates: false,
            },
        });
        // Create FocusTrap Instance
        this._focusTrap = focusTrap.createFocusTrap(this._element, (_a = this.options) === null || _a === void 0 ? void 0 : _a.focusTrap);
    }
    Object.defineProperty(Modal.prototype, "element", {
        /**
         * Modal Element Getter
         */
        get: function () {
            return this._element;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Show Modal
     */
    Modal.prototype.show = function () {
        var _a;
        this._element.setAttribute("open", "");
        // console.log(this._element.getAttribute("area-hidden"));
        if (this._element.getAttribute("area-hidden") === "true") {
            this._element.setAttribute("area-hidden", "false");
        }
        bodyScrollLock.disableBodyScroll(this._element, (_a = this.options) === null || _a === void 0 ? void 0 : _a.bodyScrollLock);
        this._focusTrap.activate();
    };
    /**
     * Close Modal
     */
    Modal.prototype.close = function () {
        this._focusTrap.deactivate();
        bodyScrollLock.enableBodyScroll(this._element);
        // console.log(this._element.getAttribute("area-hidden"));
        if (this._element.getAttribute("area-hidden") === "false") {
            this._element.setAttribute("area-hidden", "true");
        }
        this._element.removeAttribute("open");
    };
    return Modal;
}());

/**
 * Minimal Modal Class
 */
var MinimalModal = /** @class */ (function () {
    /**
     * Init Instance
     */
    function MinimalModal() {
        var _this = this;
        // ===================
        //  Non-Static
        // ===================
        /** is Active */
        this._isActive = false;
        /** Active Modal Instances */
        this._activeModals = [];
        /** Dataset Key Set */
        this.datasetKeySet = {
            showTrigger: "modalShow",
            closeTrigger: "modalClose",
        };
        window.addEventListener("click", function (event) {
            if (!_this._isActive) {
                return;
            }
            if (!(event.target instanceof HTMLElement)) {
                // Not HTML Element
                return;
            }
            var target = event.target;
            if (_this.datasetKeySet.closeTrigger in target.dataset) {
                // on Click Close Modal trigger
                _this._close();
                event.preventDefault();
            }
            if (_this.datasetKeySet.showTrigger in target.dataset) {
                // on Click Show Modal trigger
                var modalSelector = target.dataset[_this.datasetKeySet.showTrigger];
                if (modalSelector) {
                    var modalElement = document.querySelector(modalSelector);
                    if (modalElement) {
                        _this._show(modalElement);
                        event.preventDefault();
                    }
                }
            }
        });
        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape" || event.key === "Esc") {
                _this._close();
                event.preventDefault();
                return;
            }
        });
    }
    Object.defineProperty(MinimalModal, "instance", {
        /**
         * Minimal Modal Instance Getter
         */
        get: function () {
            if (!MinimalModal._instance) {
                MinimalModal._instance = new MinimalModal();
            }
            return MinimalModal._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Active Minimal Modal
     */
    MinimalModal.activate = function () {
        this.instance._activate();
    };
    /**
     * Deactive Minimal Modal
     */
    MinimalModal.deactivate = function () {
        this.instance._deactivate();
    };
    /**
     * Show Modal
     */
    MinimalModal.show = function (modalElement, options) {
        this.instance._show(modalElement, options);
    };
    /**
     * Close the Active Modal
     */
    MinimalModal.close = function () {
        this.instance._close();
    };
    /**
     * Close All Modals
     */
    MinimalModal.closeAll = function () {
        this.instance._closeAll();
    };
    Object.defineProperty(MinimalModal.prototype, "_activeModal", {
        /** Active Modal Instance */
        get: function () {
            return this._activeModals[this._activeModals.length - 1] || null;
        },
        /** Active Modal Instance */
        set: function (modal) {
            if (modal == null) {
                if (this._activeModals.length > 0) {
                    // remove latest modal
                    this._activeModals.pop();
                }
                return;
            }
            // add latest modal
            this._activeModals.push(modal);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Active Minimal Modal
     */
    MinimalModal.prototype._activate = function () {
        this._isActive = true;
    };
    /**
     * Deactive Minimal Modal
     */
    MinimalModal.prototype._deactivate = function () {
        this._isActive = false;
    };
    /**
     * Show Modal
     */
    MinimalModal.prototype._show = function (modalElement, options) {
        this._activeModal = new Modal(modalElement, options);
        this._activeModal.show();
    };
    /**
     * Close the Active Modal
     */
    MinimalModal.prototype._close = function () {
        var _a;
        (_a = this._activeModal) === null || _a === void 0 ? void 0 : _a.close();
        this._activeModal = null;
    };
    /**
     * Close All Modals
     */
    MinimalModal.prototype._closeAll = function () {
        while (this._activeModal != null) {
            this._close();
        }
    };
    return MinimalModal;
}());

new CommandTest().test();

module.exports = MinimalModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9Db21tYW5kVGVzdC50cyIsIi4uL3NyYy9tb2RhbC50cyIsIi4uL3NyYy9taW5pbWFsLW1vZGFsLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tYW5kVGVzdCB7XG5cbiAgcHVibGljIHRlc3QoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJDb21tYW5kVGVzdC4uXCIsIHByb2Nlc3MuYXJndilcbiAgfVxuXG5cbn1cbiIsImltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSBcImJvZHktc2Nyb2xsLWxvY2tcIjtcbmltcG9ydCB0eXBlIHsgRm9jdXNUcmFwIH0gZnJvbSBcImZvY3VzLXRyYXBcIjtcbmltcG9ydCB0eXBlIHsgTW9kYWwgYXMgSU1vZGFsLCBNb2RhbE9wdGlvbnMgfSBmcm9tIFwiLi4vdHlwZXMvaW5kZXhcIjtcbmltcG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9IGZyb20gXCJmb2N1cy10cmFwXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC5tZXJnZVwiO1xuXG4vKipcbiAqIE1vZGFsIENsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2RhbCBpbXBsZW1lbnRzIElNb2RhbCB7XG4gIC8qKiBlbGVtZW50ICovXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIC8qKiBmb2N1c1RyYXAgSW5zdGFuY2UgKi9cbiAgcHJpdmF0ZSBfZm9jdXNUcmFwOiBGb2N1c1RyYXA7XG5cbiAgLyoqIE1vZGFsIE9wdGlvbnMgKi9cbiAgcHJpdmF0ZSBvcHRpb25zOiBNb2RhbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEluaXQgSW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucykge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2UoXG4gICAgICB7XG4gICAgICAgIGZvY3VzVHJhcDoge1xuICAgICAgICAgIG9uQWN0aXZhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBvbkRlYWN0aXZhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBpbml0aWFsRm9jdXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmYWxsYmFja0ZvY3VzOiB1bmRlZmluZWQsXG4gICAgICAgICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBzZXRSZXR1cm5Gb2N1czogdW5kZWZpbmVkLFxuICAgICAgICAgIGFsbG93T3V0c2lkZUNsaWNrOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlTY3JvbGxMb2NrOiB7XG4gICAgICAgICAgcmVzZXJ2ZVNjcm9sbEJhckdhcDogdHJ1ZSxcbiAgICAgICAgICBhbGxvd1RvdWNoTW92ZTogKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgY29uc3QgaWdub3JlRGF0YXNldEtleSA9IFwiYm9keVNjcm9sbExvY2tJZ25vcmVcIjtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgaWYgKFwiZGF0YXNldFwiIGluIGVsZW1lbnQgJiYgaWdub3JlRGF0YXNldEtleSBpbiBlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHtcbiAgICAgICAgZm9jdXNUcmFwOiB7XG4gICAgICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuICAgICAgICAgIGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIC8vIENyZWF0ZSBGb2N1c1RyYXAgSW5zdGFuY2VcbiAgICB0aGlzLl9mb2N1c1RyYXAgPSBjcmVhdGVGb2N1c1RyYXAodGhpcy5fZWxlbWVudCwgdGhpcy5vcHRpb25zPy5mb2N1c1RyYXApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGFsIEVsZW1lbnQgR2V0dGVyXG4gICAqL1xuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgTW9kYWxcbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwib3BlblwiLCBcIlwiKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShcImFyZWEtaGlkZGVuXCIpKTtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmVhLWhpZGRlblwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKFwiYXJlYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcbiAgICB9XG4gICAgZGlzYWJsZUJvZHlTY3JvbGwodGhpcy5fZWxlbWVudCwgdGhpcy5vcHRpb25zPy5ib2R5U2Nyb2xsTG9jayk7XG4gICAgdGhpcy5fZm9jdXNUcmFwLmFjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgTW9kYWxcbiAgICovXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9mb2N1c1RyYXAuZGVhY3RpdmF0ZSgpO1xuICAgIGVuYWJsZUJvZHlTY3JvbGwodGhpcy5fZWxlbWVudCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmVhLWhpZGRlblwiKSk7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKFwiYXJlYS1oaWRkZW5cIikgPT09IFwiZmFsc2VcIikge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmVhLWhpZGRlblwiLCBcInRydWVcIik7XG4gICAgfVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwib3BlblwiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHR5cGUgeyBNaW5pbWFsTW9kYWwgYXMgSU1pbmltYWxNb2RhbCwgTW9kYWxPcHRpb25zIH0gZnJvbSBcIi4uL3R5cGVzL2luZGV4XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL21vZGFsXCI7XG5cbi8qKlxuICogTWluaW1hbCBNb2RhbCBDbGFzc1xuICovXG5leHBvcnQgY2xhc3MgTWluaW1hbE1vZGFsIGltcGxlbWVudHMgSU1pbmltYWxNb2RhbCB7XG4gIC8vID09PT09PT09PT09PT09PT09PT1cbiAgLy8gIFN0YXRpY1xuICAvLyA9PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqIE1pbmltYWwgTW9kYWwgSW5zdGFuY2UgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBNaW5pbWFsTW9kYWw7XG5cbiAgLyoqXG4gICAqIE1pbmltYWwgTW9kYWwgSW5zdGFuY2UgR2V0dGVyXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogTWluaW1hbE1vZGFsIHtcbiAgICBpZiAoIU1pbmltYWxNb2RhbC5faW5zdGFuY2UpIHtcbiAgICAgIE1pbmltYWxNb2RhbC5faW5zdGFuY2UgPSBuZXcgTWluaW1hbE1vZGFsKCk7XG4gICAgfVxuICAgIHJldHVybiBNaW5pbWFsTW9kYWwuX2luc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBNaW5pbWFsIE1vZGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFjdGl2YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UuX2FjdGl2YXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmUgTWluaW1hbCBNb2RhbFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBkZWFjdGl2YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UuX2RlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IE1vZGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNob3cobW9kYWxFbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UuX3Nob3cobW9kYWxFbGVtZW50LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgQWN0aXZlIE1vZGFsXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UuX2Nsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2UgQWxsIE1vZGFsc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlLl9jbG9zZUFsbCgpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PVxuICAvLyAgTm9uLVN0YXRpY1xuICAvLyA9PT09PT09PT09PT09PT09PT09XG5cbiAgLyoqIGlzIEFjdGl2ZSAqL1xuICBwcml2YXRlIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIC8qKiBBY3RpdmUgTW9kYWwgSW5zdGFuY2VzICovXG4gIHByaXZhdGUgX2FjdGl2ZU1vZGFsczogTW9kYWxbXSA9IFtdO1xuXG4gIC8qKiBBY3RpdmUgTW9kYWwgSW5zdGFuY2UgKi9cbiAgcHJpdmF0ZSBnZXQgX2FjdGl2ZU1vZGFsKCk6IE1vZGFsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZU1vZGFsc1t0aGlzLl9hY3RpdmVNb2RhbHMubGVuZ3RoIC0gMV0gfHwgbnVsbDtcbiAgfVxuICAvKiogQWN0aXZlIE1vZGFsIEluc3RhbmNlICovXG4gIHByaXZhdGUgc2V0IF9hY3RpdmVNb2RhbChtb2RhbDogTW9kYWwgfCBudWxsKSB7XG4gICAgaWYgKG1vZGFsID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmVNb2RhbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyByZW1vdmUgbGF0ZXN0IG1vZGFsXG4gICAgICAgIHRoaXMuX2FjdGl2ZU1vZGFscy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkIGxhdGVzdCBtb2RhbFxuICAgIHRoaXMuX2FjdGl2ZU1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIC8qKiBEYXRhc2V0IEtleSBTZXQgKi9cbiAgcHJpdmF0ZSBkYXRhc2V0S2V5U2V0OiB7XG4gICAgc2hvd1RyaWdnZXI6IHN0cmluZztcbiAgICBjbG9zZVRyaWdnZXI6IHN0cmluZztcbiAgfSA9IHtcbiAgICBzaG93VHJpZ2dlcjogXCJtb2RhbFNob3dcIixcbiAgICBjbG9zZVRyaWdnZXI6IFwibW9kYWxDbG9zZVwiLFxuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0IEluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyPFwiY2xpY2tcIj4oXCJjbGlja1wiLCAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgIC8vIE5vdCBIVE1MIEVsZW1lbnRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICBpZiAodGhpcy5kYXRhc2V0S2V5U2V0LmNsb3NlVHJpZ2dlciBpbiB0YXJnZXQuZGF0YXNldCkge1xuICAgICAgICAvLyBvbiBDbGljayBDbG9zZSBNb2RhbCB0cmlnZ2VyXG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRhdGFzZXRLZXlTZXQuc2hvd1RyaWdnZXIgaW4gdGFyZ2V0LmRhdGFzZXQpIHtcbiAgICAgICAgLy8gb24gQ2xpY2sgU2hvdyBNb2RhbCB0cmlnZ2VyXG4gICAgICAgIGNvbnN0IG1vZGFsU2VsZWN0b3I6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRhcmdldC5kYXRhc2V0W3RoaXMuZGF0YXNldEtleVNldC5zaG93VHJpZ2dlcl07XG4gICAgICAgIGlmIChtb2RhbFNlbGVjdG9yKSB7XG4gICAgICAgICAgY29uc3QgbW9kYWxFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsU2VsZWN0b3IpO1xuICAgICAgICAgIGlmIChtb2RhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3cobW9kYWxFbGVtZW50KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcjxcImtleWRvd25cIj4oXCJrZXlkb3duXCIsIChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiRXNjXCIpIHtcbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdGl2ZSBNaW5pbWFsIE1vZGFsXG4gICAqL1xuICBwcml2YXRlIF9hY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVhY3RpdmUgTWluaW1hbCBNb2RhbFxuICAgKi9cbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgTW9kYWxcbiAgICovXG4gIHByaXZhdGUgX3Nob3cobW9kYWxFbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZU1vZGFsID0gbmV3IE1vZGFsKG1vZGFsRWxlbWVudCwgb3B0aW9ucyk7XG4gICAgdGhpcy5fYWN0aXZlTW9kYWwuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBBY3RpdmUgTW9kYWxcbiAgICovXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX2FjdGl2ZU1vZGFsPy5jbG9zZSgpO1xuICAgIHRoaXMuX2FjdGl2ZU1vZGFsID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBBbGwgTW9kYWxzXG4gICAqL1xuICBwcml2YXRlIF9jbG9zZUFsbCgpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5fYWN0aXZlTW9kYWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1hbmRUZXN0IH0gZnJvbSAnLi9Db21tYW5kVGVzdCc7XG5pbXBvcnQgeyBNaW5pbWFsTW9kYWwgfSBmcm9tIFwiLi9taW5pbWFsLW1vZGFsXCI7XG5cbm5ldyBDb21tYW5kVGVzdCgpLnRlc3QoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWluaW1hbE1vZGFsO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiY3JlYXRlRm9jdXNUcmFwIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0tBT0M7SUFMUSwwQkFBSSxHQUFYO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQzNDO0lBR0gsa0JBQUM7QUFBRCxDQUFDOztBQ0REOzs7QUFHQTs7OztJQWFFLGVBQW1CLE9BQW9CLEVBQUUsT0FBc0I7O1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyxPQUFPLEdBQUdBLHlCQUFLLENBQ2xCO1lBQ0UsU0FBUyxFQUFFO2dCQUNULFVBQVUsRUFBRSxTQUFTO2dCQUNyQixZQUFZLEVBQUUsU0FBUztnQkFDdkIsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLGFBQWEsRUFBRSxTQUFTO2dCQUN4Qix1QkFBdUIsRUFBRSxTQUFTO2dCQUNsQyxjQUFjLEVBQUUsU0FBUztnQkFDekIsaUJBQWlCLEVBQUUsU0FBUzthQUM3QjtZQUNELGNBQWMsRUFBRTtnQkFDZCxtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixjQUFjLEVBQUUsVUFBQyxPQUE4QjtvQkFDN0MsSUFBTSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQztvQkFDaEQsT0FBTyxPQUFPLElBQUksT0FBTyxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7d0JBQzNDLElBQUksU0FBUyxJQUFJLE9BQU8sSUFBSSxnQkFBZ0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOzRCQUMvRCxPQUFPLElBQUksQ0FBQzt5QkFDYjt3QkFDRCxJQUFJLE9BQU8sQ0FBQyxhQUFhOzRCQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO3FCQUM1RDtvQkFDRCxPQUFPLEtBQUssQ0FBQztpQkFD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
