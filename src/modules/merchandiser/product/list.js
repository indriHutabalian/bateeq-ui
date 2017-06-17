import { inject } from 'aurelia-framework';
import { Service } from "./service";
import { Router } from 'aurelia-router';

@inject(Router, Service)
export class List {
    data = [];

    constructor(router, service) {
        this.service = service;
        this.router = router;
    }
    activate() {
        this.service.search('')
            .then(data => {
                this.data = data.data;
            })
    }

    // async activate() {
    //     this.info.keyword = '';
    //     var result = await this.service.search(this.info);
    //     this.data = result.data;
    //     this.info = result.info;
    // }

    loadPage() {
        var keyword = this.info.keyword;
        this.service.search(this.info)
            .then(result => {
                this.data = result.data;
                // this.info = result.info;
                // this.info.keyword = keyword;
            })
    }

    // changePage(e) {
    //     var page = e.detail;
    //     this.info.page = page;
    //     this.loadPage();
    // }

    view(data) {
        this.router.navigateToRoute('view', { id: data._id });
    }

    upload() {
        this.router.navigateToRoute('upload');
    }

    uploadImage() {
        this.router.navigateToRoute('upload-image');
    }


}