import React, { Component } from 'react';
import "./Vault.css";

//import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Vault extends Component {

    render(){
        return(
            <div className ="category-tabs">

                 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://gailproject.ucsc.edu/files/fullsize/b216fd90cd505896d93f1bcdf67c6bcd.jpg" alt="First slide"/>
        <div class="carousel-caption d-none d-md-block">
            <h5><b>Tatooed Hand</b></h5>
            <p> This old lady has the tattooed hands and was smoking a cigarette with the holder which turns up at the end. They are very common here. Also from her behavior while I was taking the picture. I decided she was also quite familiar with saki. The lady in the background is grinding beans in a mortor and pestal type grinder.</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://gailproject.ucsc.edu/files/fullsize/b9739f8e431db14eda186d6de1aa7d09.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
            <h5><b>Seed Store</b></h5>
            <p>"This is a seed store. The old gent has made himself a pair of bifocals by taping two pairs of glasses together. Hi is using the far vision through the top pai only now, but back to his newspapers he will look through both. Notice the cans in the back made out of old beer cans. The tin shps make most of their products out of empty beer cans, funnels, pencil boxes, and cartons & boxes of all sizes. You will notice he smokes Camel cigarettes with an ivory holder, and the dragon ash tray is Okinawan pottery. Oh, on the extreme left at the level of his shoulder is a funnel made of old Shlitz cans."</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://gailproject.ucsc.edu/files/fullsize/4033046dd51aa0a3a0346fe61914a9b7.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
            <h5><b>Katsuren Peninsula III</b></h5>
            <p> A motorboat in the peninsula between Henza and Hamiga. Before a bridge was built that connected the Hamiga to the main island, the tide would roll out so far that people could walk between islands during lowtide, a phenomenon that still occurs to this day!

The students tested out how easy and how long this would take on the peninsula, and the water, even at the highest point of the low tide, is only hip-deep. However, the seabed is covered in sea slugs and other such creatures that live in coral, which requires strong, callused feet to step on!</p>
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            <div id="vault-container">
               <div className ="vault-grid">
                    {/* <h>  */}
                        <article class="main">
                            <center><h4>"By Command of Major General Eagles”: Archival Documents and Lived Historical Experience</h4></center>  
                        </article>
                    {/* </h> */}
                    <aside class="aside aside-1">
                        <center><h5></h5>
                        <p>The Gail Project team has gathered several thousand documents from the National Archives and elsewhere from the era of American military rule of Okinawa, from 1945 to 1972. As we dig through them, one at a time, we chance upon some documents that provide deep insight to that era or that pose interesting mysteries. This is one of a series of short essays on what we are finding in our archive.</p>
                        </center> 
                    </aside>
               </div>
            </div>
            
            <div id="box-container">
               <div className ="Box-grid">
                    <article class="Hard-code-article">
                        <center><h4><b><i>By Command of Major General Eagles</i>: Archival Documents and Lived Historical Experience</b></h4></center>  
                        <center><h5>By Alan Christy</h5></center>  
                        <p> <b>Imagine yourself going into an archive, passing through the bureaucratic entry procedures under the watchful eyes of an archivist. 
                            There is the moment when the materials you requested arrive. 
                            If the archive is good and organized, you open a cardboard box to find a sheaf of folders each holding an assortment of papers. 
                            If your heart is pounding in excitement, you are probably a historian, if not by profession then by temperament. 
                            You are filled with anticipation because, as Gail Project member Jessie Haupt says, you are about to “touch history...” </b>
                            <div><a href="#" class="btn btn-primary" role="button">Read me</a></div>
                        </p>
                    </article>
                    <aside class="Subscribe">
                        <center><h4>Like what you see?</h4></center> 
                        <p>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
                            <div><a href="#" class="btn btn-primary" role="button">Add Email</a></div>
                            <div><a href="#" class="btn btn-primary" role="button">Subscribe</a></div>
                        </p>
                    </aside>
               </div>
            </div>

              <center><h4>Videos</h4></center>
                <div className ="videos">
              <div class="FlexContainer">
                  <div class="FlexItem">Video 1</div>
                  <div class="FlexItem">Video 2</div>
                  <div class="FlexItem">Video 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>

                <center><h4>Articles</h4></center>
                <div className ="articles">
                 <div class="FlexContainer">
                 <div class="FlexItem">Article 1</div>
                  <div class="FlexItem">Article 2</div>
                  <div class="FlexItem">Article 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>

                <center><h4>Gallery</h4></center>
                <div className ="gallery">
                 <div class="FlexContainer">
                  <div class="FlexItem">Gallery 1</div>
                  <div class="FlexItem">Gallery 2</div>
                  <div class="FlexItem">Gallery 3</div>
                  <div class="FlexItem">View More!</div>
                </div>
                </div>
            </div>
            
        )
    }
}

export default Vault;
