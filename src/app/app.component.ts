import { Component } from "@angular/core";
import { INgxLoadingConfig, ngxLoadingAnimationTypes } from "ngx-loading";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loading = false;
  config: INgxLoadingConfig = {};

  private setTimeoutInner() {
    setTimeout(() => (this.loading = false), 1500);
  }

  onChasingDots() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.chasingDots;
    this.setTimeoutInner();
  }

  onCircle() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.circle;
    this.setTimeoutInner();
  }
  onCubeGrid() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.cubeGrid;
    this.setTimeoutInner();
  }

  onDoubleBounce() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.doubleBounce;
    this.setTimeoutInner();
  }

  onRectangleBounce() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.rectangleBounce;
    this.setTimeoutInner();
  }

  onThreeBounce() {
    this.loading = true;
    this.config.animationType = ngxLoadingAnimationTypes.threeBounce;
    this.setTimeoutInner();
  }
}
