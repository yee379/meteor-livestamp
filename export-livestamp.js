//This file exposes livestamp so that it works with Meteor 0.6.5's package system.
if (typeof Package !== "undefined") {
  livestamp = this.livestamp;
}
