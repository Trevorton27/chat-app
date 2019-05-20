--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.2

-- Started on 2019-05-20 15:04:38

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2815 (class 1262 OID 16399)
-- Name: chat_app; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE chat_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Japanese_Japan.932' LC_CTYPE = 'Japanese_Japan.932';


ALTER DATABASE chat_app OWNER TO postgres;

\connect chat_app

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16400)
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    message_body character varying(120),
    created_at date,
    id character varying(5)[]
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 16403)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    first_name character varying(50),
    last_name character varying,
    create_date date,
    id character varying(50)[]
);


ALTER TABLE public.users OWNER TO postgres;

-- Completed on 2019-05-20 15:04:38

--
-- PostgreSQL database dump complete
--

