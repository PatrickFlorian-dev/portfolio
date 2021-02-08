import { Component, OnInit, Input } from '@angular/core';
import { ListCategoriesInfo } from 'app/shared/interfaces/list-categories-info';
import { BlogInfo } from 'app/shared/interfaces/blog-info';
declare var $: any;

@Component({
    selector: 'app-blog-showcase',
    templateUrl: './blog-showcase.component.html',
    styleUrls: ['./blog-showcase.component.scss'],
})

export class BlogShowcaseComponent implements OnInit {

    contents: string = 'contents';

    imgUrl = 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    expandedBlog: BlogInfo = new BlogInfo();

    categories: ListCategoriesInfo[] = [
        { id: 1 , name: 'Tech' },
        { id: 2 , name: 'News' },
        { id: 3 , name: 'Travel' },
        { id: 4 , name: 'Stocks' },
        { id: 5 , name: 'Programming' },
        { id: 6 , name: 'Food' },
    ];

    blogs : BlogInfo[] = [
        {
            id: 1,
            title: 'Check out what Germany is using',
            category: 1,
            categoryName: 'Tech',
            description: 'German software engineers use a totally different arsenal of framewords and languages.',
            flagUrl: './assets/img/flags/germany.png',
            bgUrl: 'https://images.pexels.com/photos/756688/pexels-photo-756688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-microchip',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '08',
            createdAtMonth: 'FEB',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 1,
        },
        {
            id: 2,
            title: 'Covid-19 and web development.',
            category: 2,
            categoryName: 'News',
            description: 'Checkout how this strange new world is affecting software development around the world and how you can help!',
            flagUrl: './assets/img/flags/united-states.png',
            bgUrl: 'https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-newspaper',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '13',
            createdAtMonth: 'JUL',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 2,
        },
        {
            id: 3,
            title: 'My trip to Venice during Covid-19.',
            category: 3,
            categoryName: 'Travel',
            description: 'It was super weird seeing one of the most popular vacation destinations, Venice shutdown.',
            flagUrl: './assets/img/flags/italy.png',
            bgUrl: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-plane',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '15',
            createdAtMonth: 'MAY',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 3,
        },
        {
            id: 4,
            title: 'Tech giants and Covid-19',
            category: 4,
            categoryName: 'Stock Market',
            description: 'Find out which tech giants are struggling to stay afloat and which ones to invest in! Including this hot Japanese company new to the market.',
            flagUrl: './assets/img/flags/japan.png',
            bgUrl: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-chart-line',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '22',
            createdAtMonth: 'SEP',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 4,
        },
        {
            id: 5,
            title: 'Helping new developers',
            category: 5,
            categoryName: 'Programming',
            description: 'Having a little difficulty with angular? I gathered some awesome resources just for you!',
            flagUrl: './assets/img/flags/united-states.png',
            bgUrl: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-code',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '10',
            createdAtMonth: 'DEC',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 5,
        },
        {
            id: 6,
            title: 'Paella Valenciana',
            category: 6,
            categoryName: 'Food',
            description: 'My grandparents from Spain handed this recipe down to me and now im handing it to you!',
            flagUrl: './assets/img/flags/spain.png',
            bgUrl: 'https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            urlLink: 'http://localhost:4200/',
            faIcon: 'fas fa-utensils',
            content: 'This is the main content of the blog for later use',
            createdAtObj: new Date('2019-08-02'), 
            createdAtDate: '01',
            createdAtMonth: 'OCT',
            colSize: 'col-md-5',
            visible: true,
            blogBody: 6,
        },

    ]

    ngOnInit() {

    }

    filterList( categoryId: number ) {
        
        var foundIndex = this.blogs.findIndex(x => x.category === categoryId);
        this.blogs[foundIndex].visible = !this.blogs[foundIndex].visible;
        
    }

    openBlog( categoryId: number ) {
        this.expandedBlog = this.blogs.find(x => x.id === categoryId);
        console.log(this.expandedBlog)
        $('.cards-row').fadeOut("slow");
        $('.individual-blog-container').fadeIn("slow");
    }

    closeBlog( ) {
        $('.individual-blog-container').fadeOut("slow");
        $('.cards-row').fadeIn("slow");
    }

}