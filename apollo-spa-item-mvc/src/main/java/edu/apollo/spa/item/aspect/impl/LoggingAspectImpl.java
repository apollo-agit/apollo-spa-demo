package edu.apollo.spa.item.aspect.impl;

import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import edu.apollo.spa.item.aspect.LoggingAspect;


/**
 * Using JRE 1.7.0_75
 * 
 * The Class LoggingAspectImpl is the implementation provided 
 * for the logging interface, which is really on three joinpoints...
 * 1. Before/After function execution
 * 2. After exception is thrown (for obvious reasons)
 * 3. After any execution marked with the logging annotation.
 *
 * @author Ian Hamilton
 * @version 1.0
 * @since 1.0
 * 
 */
@Aspect
@Component
public class LoggingAspectImpl implements LoggingAspect {
	private static final Logger log = LoggerFactory.getLogger(LoggingAspectImpl.class);

	/* (non-Javadoc)
	 * @see edu.apollo.spa.item.aspect.LoggingAspect#logBefore(org.aspectj.lang.JoinPoint)
	 */
	@Override
	@Before("execution(* edu.apollo.spa.item..*(..))")
	@Order(0)
	public void logBefore(JoinPoint joinPoint) {
		if(log.isDebugEnabled())
			log.debug("The method " + joinPoint.getSignature().getName()
					+ "() begins with " + Arrays.toString(joinPoint.getArgs()));		
	}

	/* (non-Javadoc)
	 * @see edu.apollo.spa.item.aspect.LoggingAspect#logAfter(org.aspectj.lang.JoinPoint)
	 */
	@Override
	@After("execution(* edu.apollo.spa.item..*(..))") 
	public void logAfter(JoinPoint joinPoint) {
		if(log.isDebugEnabled())
			log.debug("The method " + joinPoint.getSignature().getName() + "() ends");		
	}

	/* (non-Javadoc)
	 * @see edu.apollo.spa.item.aspect.LoggingAspect#logAfterThrowing(org.aspectj.lang.JoinPoint, java.lang.Throwable)
	 */
	@Override
	@AfterThrowing(pointcut = "execution(* edu.apollo.spa.item..*(..))", throwing = "e")
	public void logAfterThrowing(JoinPoint joinPoint, Throwable e) {
		log.error(String.format("Error thrown during application execution -> %s()", joinPoint.getSignature().getName()), e);		
	}

	/* (non-Javadoc)
	 * @see edu.apollo.spa.item.aspect.LoggingAspect#logBeforeAnnotation(org.aspectj.lang.JoinPoint)
	 */
	@Override
	@Before("@annotation(edu.apollo.spa.item.aspect.impl.FineGrainLogging)")
	@Order(1)
	public void logBeforeAnnotation(JoinPoint joinPoint) {
		log.info("The annotated method " + joinPoint.getSignature().getName()
				+ "() begins with " + Arrays.toString(joinPoint.getArgs()));
			
	}
	
}
