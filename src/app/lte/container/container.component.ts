import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { LteOptionsService } from '../services/lte-options.service';
import { ContainerService } from './container.service';
declare var $;

@Component({
  selector: 'lte-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent implements OnInit, AfterViewInit {

  constructor(
    private _lteOptionsService: LteOptionsService,
    private _containerService: ContainerService
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activate();
  }

  activate () {
    var _this = this;    
    _this.fix();
    _this.fixSidebar();
    $('body, html, .wrapper').css('height', 'auto');
    $(window, ".wrapper").resize(function () {
      _this.fix();
      _this.fixSidebar();
    });
  }

  fix () {
    // Remove overflow from .wrapper if layout-boxed exists
    $(".layout-boxed > .wrapper").css('overflow', 'hidden');
    //Get window height and the wrapper height
    var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
    var window_height = $(window).height();
    var sidebar_height = $(".sidebar").height();
    //Set the min-height of the content and sidebar based on the
    //the height of the document.
    if ($("body").hasClass("fixed")) {
      $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
    } else {
      var postSetWidth;
      if (window_height >= sidebar_height) {
        $(".content-wrapper, .right-side").css('min-height', window_height - neg);
        postSetWidth = window_height - neg;
      } else {
        $(".content-wrapper, .right-side").css('min-height', sidebar_height);
        postSetWidth = sidebar_height;
      }

      //Fix for the control sidebar height
      var controlSidebar = $(this._lteOptionsService.controlSidebarOptions.selector);
      if (typeof controlSidebar !== "undefined") {
        if (controlSidebar.height() > postSetWidth)
          $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
      }

    }
  }

  fixSidebar () {
    //Make sure the body tag has the .fixed class
    if (!$("body").hasClass("fixed")) {
      if (typeof $.fn.slimScroll != 'undefined') {
        $(".sidebar").slimScroll({destroy: true}).height("auto");
      }
      return;
    } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
      window.console.error("Error: the fixed layout requires the slimscroll plugin!");
    }
    //Enable slimscroll for fixed layout
    if (this._lteOptionsService.sidebarSlimScroll) {
      if (typeof $.fn.slimScroll != 'undefined') {
        //Destroy if it exists
        $(".sidebar").slimScroll({destroy: true}).height("auto");
        //Add slimscroll
        $(".sidebar").slimscroll({
          height: ($(window).height() - $(".main-header").height()) + "px",
          color: "rgba(0,0,0,0.2)",
          size: "3px"
        });
      }
    }
  }
}
