PGDMP     8    9    
            w            chat_app    11.3    11.3 
               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            	           1262    16399    chat_app    DATABASE     �   CREATE DATABASE chat_app WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Japanese_Japan.932' LC_CTYPE = 'Japanese_Japan.932';
    DROP DATABASE chat_app;
             postgres    false            �            1259    24614    messages_sequence    SEQUENCE     z   CREATE SEQUENCE public.messages_sequence
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.messages_sequence;
       public       postgres    false            �            1259    24591    messages    TABLE     �   CREATE TABLE public.messages (
    id integer DEFAULT nextval('public.messages_sequence'::regclass) NOT NULL,
    user_id integer NOT NULL,
    text character varying,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.messages;
       public         postgres    false    198            �            1259    32806    seq_user    SEQUENCE     p   CREATE SEQUENCE public.seq_user
    START WITH 4
    INCREMENT BY 1
    MINVALUE 4
    NO MAXVALUE
    CACHE 1;
    DROP SEQUENCE public.seq_user;
       public       postgres    false            �            1259    24609    users    TABLE     �   CREATE TABLE public.users (
    id integer DEFAULT nextval('public.seq_user'::regclass) NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    username character varying(16),
    created_at timestamp without time zone
);
    DROP TABLE public.users;
       public         postgres    false    199            �
           2606    24613    users UNIQUE 
   CONSTRAINT     L   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UNIQUE" PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.users DROP CONSTRAINT "UNIQUE";
       public         postgres    false    197            �
           2606    24598    messages unique 
   CONSTRAINT     O   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "unique" PRIMARY KEY (id);
 ;   ALTER TABLE ONLY public.messages DROP CONSTRAINT "unique";
       public         postgres    false    196           