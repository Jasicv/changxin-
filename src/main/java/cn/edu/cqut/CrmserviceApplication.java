package cn.edu.cqut;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;

@SpringBootApplication
@MapperScan("cn.edu.cqut.mapper")
public class CrmserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrmserviceApplication.class, args);
	}
	
	/**
	 * 注入MyBatis的分页插件
	 * @return
	 */
	@Bean
	public PaginationInterceptor paginationInterceptor() {
		return new PaginationInterceptor();
	}
}
