import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { CreateBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
    constructor(
        private bookmarkService: BookmarkService,
      ) {}

    @Get()
    getBookmarks(@GetUser('id') userId: number){
    }

    @Get(':id')
    getBookmarkById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) bookmarkId: number
        ){}
    
    @Post()
    createBookmark(
        @GetUser('id') userId: number,
        @Body() dto: CreateBookmarkDto
        ){}

    @Patch()
        editBookmarkById(
            @GetUser('id') userId: number,
        ){}
    
    
}
