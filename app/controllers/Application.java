package controllers;

import play.*;
import play.mvc.*;

import views.html.*;

public class Application extends Controller {
  
  public static Result index() {
    return ok(index.render("Hello World!"));
  }
  
  public static Result about(){
	return ok(about.render());
  }
  
  public static Result proposal(){
	return ok(proposal.render());
  }
  
  public static Result ceremony(){
	return ok(ceremony.render());
  }
  
  public static Result wedding_party(){
	return ok(weddingparty.render());
  }
  
  public static Result registries(){
	return ok(registries.render());
  }
  
  public static Result guest_info(){
	return ok(guestinfo.render());
  }
  
  public static Result photo_album(){
	return ok(photoalbum.render());
  }
  
  public static Result guest_book(){
	return ok(guestbook.render());
  }
  
  public static Result honeymoon(){
	return ok(honeymoon.render());
  }
  
}