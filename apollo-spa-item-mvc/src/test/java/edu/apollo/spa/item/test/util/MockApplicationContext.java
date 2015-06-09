/**
 * 
 */
package edu.apollo.spa.item.test.util;

import java.nio.charset.Charset;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;

/**
 * @author ihamilto
 *
 */
@Configuration
public class MockApplicationContext {

	public static final MediaType APPLICATION_JSON = new MediaType(MediaType.APPLICATION_JSON.getType(), 
			MediaType.APPLICATION_JSON.getSubtype());
	
	public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(), 
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

}
