<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeFoodReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('food__reviews', function (Blueprint $table) {
            $table->string('username')->nullable()->change();
            $table->string('rating')->nullable()->after('username');
            $table->dropColumn('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('food__reviews', function (Blueprint $table) {
            $table->string('username')->nullable(false)->change();
            $table->dropColumn('rating');
        });
    }
}
