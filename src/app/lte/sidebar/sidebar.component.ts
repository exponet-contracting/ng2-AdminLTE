import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LteOptionsService } from '../services/lte-options.service';
import { ContainerService } from '../container/container.service';
import { HeaderService } from '../header/header.service';
declare var $;

@Component({
  selector: 'lte-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor(
    private _lteOptionsService: LteOptionsService,
    private _containerService: ContainerService,
    private _headerService: HeaderService,
    ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activate(this._lteOptionsService.sidebarToggleSelector);
  }

  activate(toggleBtn) {
    //Get the screen sizes
    var screenSizes = this._lteOptionsService.screenSizes;

    // //Enable sidebar toggle
    // $(document).on('click', toggleBtn, function (e) {
    //   e.preventDefault();

    //   //Enable sidebar push menu
    //   if ($(window).width() > (screenSizes.sm - 1)) {
    //     if ($("body").hasClass('sidebar-collapse')) {
    //       $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
    //     } else {
    //       $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
    //     }
    //   }
    //   //Handle sidebar push menu for small screens
    //   else {
    //     if ($("body").hasClass('sidebar-open')) {
    //       $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
    //     } else {
    //       $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
    //     }
    //   }
    // });

    this._headerService.toggleNavigationClicked$.subscribe(x => {

      //Enable sidebar push menu
      if (window.innerWidth> (screenSizes.sm - 1)) {
        if ($("body").hasClass('sidebar-collapse')) {
          $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
        } else {
          $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
        }
      }
      //Handle sidebar push menu for small screens
      else {
        if ($("body").hasClass('sidebar-open')) {
          $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
        } else {
          $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
        }
      }

    });

    // $(".content-wrapper").click(function () {
    //   //Enable hide menu when clicking on the content-wrapper on small screens
    //   if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
    //     $("body").removeClass('sidebar-open');
    //   }
    // });

    this._containerService.contentWrapperClicked$.subscribe(x => {

      if (window.innerWidth <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
        $("body").removeClass('sidebar-open');
      }

    });

    //Enable expand on hover for sidebar mini
    if (this._lteOptionsService.sidebarExpandOnHover
      || ($('body').hasClass('fixed')
      && $('body').hasClass('sidebar-mini'))) {
      this.expandOnHover();
    }
  }

  expandOnHover() {
    var _this = this;
    var screenWidth = this._lteOptionsService.screenSizes.sm - 1;
    //Expand sidebar on hover
    $('.main-sidebar').hover(function () {
      if ($('body').hasClass('sidebar-mini')
        && $("body").hasClass('sidebar-collapse')
        && $(window).width() > screenWidth) {
        _this.expand();
      }
    }, function () {
      if ($('body').hasClass('sidebar-mini')
        && $('body').hasClass('sidebar-expanded-on-hover')
        && $(window).width() > screenWidth) {
        _this.collapse();
      }
    });
  }

  expand() {
    $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
  }

  collapse() {
    if ($('body').hasClass('sidebar-expanded-on-hover')) {
      $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
    }
  }

}
