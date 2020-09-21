<?php


?>
<div class="navbar">
            <div class="navbar_top_line">
                <nav class="casino_options_nav">
                    <ul class="casino_options_list">
                        <li class="casino_options_li">
                            <a data-title="OROBET.COM - Online Casino, Slots, Online Lottery"
                               href="../en.php"
                               class="casino_options_link">Casino</a>
                        </li>
                        <li class="casino_options_li">
                            <a data-title="Online Kasino - OROBET.COM"
                               href="live-casino.php"
                               class="casino_options_link">Live Casino</a>
                        </li>
                        <li class="casino_options_li">
                            <a data-title="TV Games"
                               href="tv_games.php"
                               class="casino_options_link">TV games</a>
                        </li>
                        <li class="casino_options_li">
                            <a data-title="Sport betting sportsbook ArgoCasino"
                               href="sport.php"
                               class="casino_options_link">Sport</a>
                        </li>
                        <li class="casino_options_li">
                            <a data-title="Virtual Sport - OROBET.COM"
                               href="virtual-sport.php"
                               class="casino_options_link">Virtual Sport</a>
<!--                            <ul class="casino_options_sub_menu">-->
<!--                                <li class="casino_options_sub_menu_li">-->
<!--                                    <a href="/--><?//= LANGUAGE_CODE . '/' . ( User::isOnline() ? 'game' : 'demo' ) . '/football-league-3392' ?><!--"-->
<!--                                       class="casino_options_sub_menu_game_link">-->
<!--                                        Kiron-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                                <li class="casino_options_sub_menu_li">-->
<!--                                    <a href="/--><?//= LANGUAGE_CODE . '/' . ( User::isOnline() ? 'game' : 'demo' ) . '/virtual-basketball-league-3391' ?><!--"-->
<!--                                       class="casino_options_sub_menu_game_link">-->
<!--                                        BetRadar-->
<!--                                    </a>-->
<!--                                </li>-->
<!--                            </ul>-->
                        </li>
<!--                        <li class="casino_options_li">-->
<!--                            <a href=""-->
<!--                               class="casino_options_link">--><!--</a>-->
<!--                        </li>-->
                    </ul>
                    <!-- /.casino_options_list -->
                </nav>

                <a href="e-sport.php">
                    <img src="../img/logo_ESports.svg" alt="">
                </a>
                <!-- /.casino_options_nav -->
                <nav class="header-top__nav pull-left main_top_bar">
                    <ul class="header-top__nav__list pull-left horizontal left_top_menu">
                        <li class="header-top__nav__item">
                            <a title="Promotions"
                               href="bonuses.php">
                                <i class="icon-promo"></i>
                                <span>Promotions</span>
                            </a>
                        </li>
						                            <li class="header-top__nav__item">
                                <a title="Tournaments"
                                   href="tournament.php">
                                    <i class="icon-tournament"></i>
                                    <span>Tournaments</span>
                                </a>
                            </li>
						
						                            <li class="header-top__nav__item"><a title="Download"
                                     href="download.php">
                                    <i class="icon-download"></i>
                                    <span>Download</span>
                                </a>
                            </li>
												                            <li class="lang_box">
                                <div class="lang-switcher">
									                                    <div class="lang_switch_active">EN</div>
                                    <ul class="hidden_switcher">


										<li class="ru"><a href="../ru/registrationd56b.php?login"></a><a class="no_image" href="../ru/registrationd56b.php?login"><span>Русский</span></a></li><li class="pl"><a href="../pl/registrationd56b.php?login"></a><a class="no_image" href="../pl/registrationd56b.php?login"><span>Polski</span></a></li><li class="sv"><a href="../sv/registrationd56b.php?login"></a><a class="no_image" href="../sv/registrationd56b.php?login"><span>Svenska</span></a></li><li class="en active"><a href="registrationd56b.php?login"></a><a class="no_image" href="registrationd56b.php?login"><span>English</span></a></li><li class="de"><a href="../de/registrationd56b.php?login"></a><a class="no_image" href="../de/registrationd56b.php?login"><span>Deutsch</span></a></li><li class="ro"><a href="../ro/registrationd56b.php?login"></a><a class="no_image" href="../ro/registrationd56b.php?login"><span>Română</span></a></li><li class="zh"><a href="../zh/registrationd56b.php?login"></a><a class="no_image" href="../zh/registrationd56b.php?login"><span>Chinese</span></a></li><li class="uk"><a href="../uk/registrationd56b.php?login"></a><a class="no_image" href="../uk/registrationd56b.php?login"><span>Українська</span></a></li><li class="tr"><a href="../tr/registrationd56b.php?login"></a><a class="no_image" href="../tr/registrationd56b.php?login"><span>Turkey</span></a></li>                                    </ul>
                                </div>
                            </li>

															<!--                                <li><a class="fix-login btn small blue popup-open"-->
<!--                                       href="/--><?//= LANGUAGE_CODE ?><!--/registration?login"><span>--><!--</span></a>-->
<!--                                </li>-->
																			                    </ul>
                </nav>
            </div><!-- /.navbar_top_line -->
            <div class="navbar_bottom_line">
                <nav class="header-top__nav pull-right main_top_bar">
                    <ul class="header-top__nav__list horizontal">
                        <li class="search_box">

                            <div id="search-plugin">
                                <div class="">
                                    <form action="http://6.argocasino50.com/en/search" method="get" class="search_form">
                                        <input type="text" class="search-plugin__text" name="q"
                                               placeholder="Search games">
                                        <input type="submit" class="search-plugin__btn" onclick="$('form.search_form').submit(); return false;" value="search">
                                        <!--			  <a href="#" class="search_close" onclick="$('body').click(); return false;"></a>-->
                                    </form>
<!--                                    <div class="search_close" onclick="$('body').click(); $(this).hide(); return false;"><i></i></div>-->
                                </div>
                            </div>
                        </li>
                        <?php if( isset($_SESSION['username'])  )
{
?>
						                            
                            <li class=""><a class="btn green_reg_top small popup-open"
                                   href="registration.php"><span>Logout</span></a>
                            </li>

                            <?php }else{ ?>

                                <li class="flex100">
                                <a class="fix-login btn small blue popup-open"
                                   href="registrationd56b.php?login"><span>Login</span></a>
                            </li>
                            <li class=""><a class="btn green_reg_top small popup-open"
                                   href="registration.php"><span>Join Now</span></a>
                            </li>

                            <?php } ?>
							                    </ul>
                </nav>
            </div><!-- /.navbar_bottom_line -->
        </div><!-- /.navbar     -->
    </div>